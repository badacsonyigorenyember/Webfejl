export interface Property{
  id: string,
  userId: string,
  city: string,
  address: {
    street: string,
    number: number
  },
  size: number,
  dateOfBuilt: Date,
  furnished: boolean
}
