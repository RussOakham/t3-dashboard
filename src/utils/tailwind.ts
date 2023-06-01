export default function twClassNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
