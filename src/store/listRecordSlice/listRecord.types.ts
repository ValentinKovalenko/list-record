export interface Record {
  id: string
  title: string
  status: string
}

export interface RecordState {
  records: Record[]
  filterRecord: Record[]
}
