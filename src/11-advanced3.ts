// 映射类型
interface Obj {
  a: number;
  b: string;
  c: number;
}
// 同态
type ReadonlyObj = Readonly<Obj>;

type PartialObj = Partial<Obj>;

type PickObj = Pick<Obj, "a" | "b">;

// 非同态
type RecordObj = Record<"x" | "y", Obj>;
