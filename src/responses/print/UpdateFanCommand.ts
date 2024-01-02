import type { PrintMessageCommand } from "./PrintMessage"
import type { StringNumber } from "src/types"

export interface UpdateFanCommand extends PrintMessageCommand {
	command: "gcode_line"
	param: string
	reason: "SUCCESS" | "FAILURE" | string
	result: "SUCCESS" | "FAILURE" | string
	sequence_id: StringNumber
}

export function isUpdateFanCommand(data: PrintMessageCommand): data is UpdateFanCommand {
	return data.command === "gcode_line" && Boolean(data?.param?.startsWith("M106"))
}
