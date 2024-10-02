// 1.1
const a: string = "Hello";
const b: number = 42;
const c: boolean = true;
const d: number[] = [1, 2, 3];

// 1.2 + 1.3
export function multiply(a: number, b: number, showResult: boolean = false): number {
  const result = a * b;

  if (showResult) {
    console.log(result);
  }
  
  return result;
}