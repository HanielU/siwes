import type { FormInput, User } from "$lib/types";

export const createUser = ({
  firstname,
  lastname,
  workid,
  department,
  phoneNo,
  pcType,
  pcSerialCode,
  discCode
}: FormInput): User => ({
  fullname: `${firstname} ${lastname}`,
  workid,
  department: department.split("").join(".").toUpperCase(),
  phoneNo,
  pcSerialCode: `${pcType.toUpperCase()}${pcSerialCode.toUpperCase()}`,
  discCode
});

export const generateIterableFromNum = (num: number) => {
  const numArr: number[] = [];
  for (let i = 1; i <= num; i++) numArr.push(i);
  return numArr;
};

export function download(content: any, fileName: string, contentType: string) {
  const a = document.createElement("a");
  const file = new Blob([JSON.stringify(content)], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}
