export interface Call {
  id: string
  phoneNumber: string
  date: string
  time: string
  duration: string
  outcome: string
  issueType: string
  status: "ai-resolved" | "warm-transfer" | "appointment" | "dropped"
  transcript?: {
    speaker: "ai" | "customer"
    message: string
  }[]
}

export type CallStatus = Call["status"]
export type IssueType = "Screen" | "Battery" | "Software" | "Unknown"
