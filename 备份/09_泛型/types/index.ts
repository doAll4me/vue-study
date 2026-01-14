// types文件夹中存储各种类型
// 定义Person的接口，描述 Person 对象的数据结构（类型约束）
export interface PersonInter {
  // export 是分别暴露
  id: string;
  name: string;
  age: number;
}

// 自定义类型
export type Persons = Array<PersonInter>;
