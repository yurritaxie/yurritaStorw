# 表单类型声明注解
```ts
//定义一个类型为Arrayable的泛型
type Arrayable<T> = T | T[]

type FormValidationResult = Promise<boolean>


type FormValidateCallback = (
  isValid: boolean,
  invalidFields?: ValidateFieldsError
) => void


interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>
}
type FormRules = Partial<Record<string, Arrayable<FormItemRule>>>
```
