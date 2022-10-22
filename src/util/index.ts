export const convertUserNameToInitials = (username: string) =>
  username
    .split(' ')
    .map((part) => part[0].toUpperCase())
    .join('')

export function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !('nodeType' in e)) {
    throw new Error(`Node expected`)
  }
}
