export const convertUserNameToInitials = (username: string) =>
  username
    .split(' ')
    .map((part) => part[0].toUpperCase())
    .join('')
