export const repeatCharacter = (char: string, n: number): string =>{
  let result = '';
  for (let i = 0; i < n; i++) {
    result += char;
  }
  return result;
}