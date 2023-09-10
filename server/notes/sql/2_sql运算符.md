# 一、算术运算符

| **运算符**   | **名称**           | 作用                     | 示例                               |
| ------------ | ------------------ | ------------------------ | ---------------------------------- |
| **+**        | 加法运算符         | 计算两个值或表达式的和   | **SELECT A+B**                     |
| **-**        | 减法运算符         | 计算两个值或表达式的差   | **SELECT A-B**                     |
| **\***       | 乘法运算符         | 计算两个值或表达式的乘积 | **SELECT A\*B**                    |
| **/ 或 DIV** | 除法运算符         | 计算两个值或表达式的商   | **SELECT A/B 或者 SELECT A DIV B** |
| **% 或 MOD** | 求模运算符（取余） | 计算两个值或表达式的余数 | **SELECT A%B 或者 SELECT A MOD B** |

## 1、加法和减法运算符

```sql
SELECT 100, 100 + 0, 100 - 0, 100 + 50, 100 + 50 -30, 100 + 35.5, 100 - 35.5
FROM dual;  # DUAL 伪表
```

**总结：**

- 一个整数类型的值对整数进行加法和减法操作，结果还是一个整数；
- 一个整数类型的值对浮点数进行加法和减法操作，结果是一个浮点数；
- 加法和减法的优先级相同，进行先加后减操作与进行先减后加操作的结果是一样的；
- 在 JavaScript 中，+的左右两边如果有字符串，那么表示字符串的拼接。但是在 MySQL 中+只表示数 值相加。如果遇到非数值类型，先尝试转成数值，如果转失败，就按 0 计算。（补充：MySQL 中字符串拼接要使用字符串函数 CONCAT()实现）

## 2、乘法与除法运算符

```sql
#计算出员工的年基本工资
SELECT employee_id,salary,salary * 12 annual_sal
FROM employees;
```

**总结：**

- 一个数乘以整数 1 和除以整数 1 后仍得原数； 一个数乘以浮点数 1 和除以浮点数 1 后变成浮点数，数值与原数相等；
- 一个数除以整数后，不管是否能除尽，结果都为一个浮点数；
- 一个数除以另一个数，除不尽时，结果为一个浮点数，并保留到小数点后 4 位；
- 乘法和除法的优先级相同，进行先乘后除操作与先除后乘操作，得出的结果相同。 在数学运算中，0 不能用作除数，在 MySQL 中，一个数除以 0 为 NULL

## 3、求模（求余）运算符

```sql
 SELECT 12 % 3, 12 MOD 5 FROM dual;
```

<hr/>

# 二、比较运算符

<span style="color:green;">较运算符用来对表达式左边的操作数和右边的操作数进行比较，比较的结果为真则返回 1，比较的结果 为假则返回 0，其他情况则返回 NULL。</span>

| 运算符     | 名称           | 作用                                                             | 示例                                                                       |
| ---------- | -------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **=**      | 等于运算符     | 判断两个字、字符串或表达式是否相等                               | **SELECT C FROM TABLE WHERE A = B**                                        |
| **<=>**    | 安全等于运算符 | 安全地判断两个值、字符串或表达式是否相等                         | **SELECT C FROM TABLE WHERE A <=> B**                                      |
| **<>(!=)** | 不等于运算符   | 判断两个值、字符串或者表达式是否不相等                           | **SELECT C FROM TABLE WHERE A != B 或者 SELECT C FROM TABLE WHERE A <> B** |
| **<**      | 小于运算符     | 判断前面的值、字符串或表达式是否小于后面的值、字符串或表达式     | **SELECT C FROM TABLE WHERE A <B**                                         |
| **<=**     | 小于等于运算符 | 判断前面的值、字符串或表达式是否小于等于后面的值、字符串或表达式 | **SELECT C FROM TABLE WHERE A <= B**                                       |
| **>**      | 大于运算符     | 判断前面的值、字符串或表达式是否大于后面的值、字符串或表达式     | **SELECT C FROM TABLE WHERE A > B**                                        |
| **>=**     | 大于等于运算符 | 判断前面的值、字符串或表达式是否大于等于后面的值、字符串或表达式 | **SELECT C FROM TABLE WHERE A >= B**                                       |

## 1、等号运算符

- 等号运算符（=）判断等号两边的值、字符串或表达式是否相等，如果相等则返回 1，不相等则返回 0。
- 在使用等号运算符时，遵循如下规则：

  - 如果等号两边的值、字符串或表达式都为字符串，则 MySQL 会按照字符串进行比较，其比较的 是每个字符串中字符的 ANSI 编码是否相等。
  - 如果等号两边的值都是整数，则 MySQL 会按照整数来比较两个值的大小。
  - 如果等号两边的值一个是整数，另一个是字符串，则 MySQL 会将字符串转化为数字进行比较。
  - 如果等号两边的值、字符串或表达式中有一个为 NULL，则比较结果为 NULL。

- 对比：SQL 中赋值符号使用 :=;

## 2、安全等于运算符

- 使用安全等于运算符时，两边的操作数的值都为 NULL 时，返回的结果为 1 而不是 NULL，其他 返回结果与等于运算符相同。

## 3、不等于运算符

- 不等于运算符（<>和!=）用于判断两边的数字、字符串或者表达式的值是否不相等， 如果不相等则返回 1，相等则返回 0。
- 不等于运算符不能判断 NULL 值。
- 如果两边的值有任意一个为 NULL， 或两边都为 NULL，则结果为 NULL

| 运算符              | 名称             | 作用                                     | 示例                                            |
| ------------------- | ---------------- | ---------------------------------------- | ----------------------------------------------- |
| **IS NOTNULL**      | 不为空运算符     | 判断值、字符串或者表达式是否不为空       | **SELECT B FROM TABLE WHERE A IS NOT NULL**     |
| **LEAST**           | 最小值运算符     | 在多个值中返回最小值                     | **SELECT D FROM TABLE WHERE C LEAST (A,B)**     |
| **GREATEST**        | 最大值运算符     | 在多个值中返回最大值                     | **SELECT D FROM TABLE WHERE C GREATEST (A,B)**  |
| **BETWEEN** **AND** | 两者之间的运算符 | 判断一个值是否在两个值之间               | **SELECT D FROM TABLE WHERE C BETWEEN A AND B** |
| **ISNULL**          | 为空运算符       | 判断一个值、字符串或表达式是否为空       | **SELECT B FROM TABLE WHERE A ISNULL**          |
| **IN**              | 属于运算符       | 判断一个值是否为列表中的任意一个值       | **SELECT D FROM TABLE WHERE C IN (A,B)**        |
| **NOT IN**          | 不属于运算符     | 判断一个值是否不是一个列表中的任意一个值 | **SELECT D FROM TABLE WHERE C NOT IN(A,B)**     |
| **LIKE**            | 模糊匹配运算符   | 判断一个值是否符合模糊匹配规则           | **SELECT D FROM TABLE WHERE A LIKE B**          |
| **REGEXP**          | 正则表达式运算符 | 判断一个值是否符合正则表达式的规则       | **SELECT D FROM TABLE WHERE A REGEXP B**        |
| **RLIKE**           | 正则表达式运算符 | 判断一个值是否符合正则表达式的规则       | **SELECT D FROM TABLE WHERE A RLIKE B**         |

## 4、空运算符

- <span style="color: green">空运算符（IS NULL 或者 ISNULL）判断一个值是否为 NULL，如果为 NULL 则返回 1，否则返回 0。</span>

```sql
 SELECT NULL IS NULL, ISNULL(NULL), ISNULL('a'), 1 IS NULL;
```

## 5、非空运算符

- <span style="color: green">非空运算符（IS NOT NULL）判断一个值是否不为 NULL，如果不为 NULL 则返回 1，否则返 回 0。</span>

```sql
SELECT NULL IS NOT NULL, 'a' IS NOT NULL, 1 IS NOT NULL;
```

## 6、最小运算符

- <span style="color: green">非空运算符（IS NOT NULL）判断一个值是否不为 NULL，如果不为 NULL 则返回 1，否则返 回 0。</span>

- <span style="color: green">当参数是整数或者浮点数时，LEAST 将返回其中最小的值</span>
- <span style="color: green">当参数为字符串时，返回字母表中顺序最靠前的字符</span>
- <span style="color: green">当比较值列表中有 NULL 时，不能判断大小，返回值为 NULL。</span>

```sql
SELECT LEAST (1,0,2), LEAST('b','a','c'), LEAST(1,NULL,2);
```

## 7、最大运算符

- <span style="color: green">GREATEST(值 1，值 2，...，值 n)。其中，n 表示参数列表中有 n 个值。当有 两个或多个参数时，返回值为最大值。假如任意一个自变量为 NULL，则 GREATEST()的返回值为 NULL。</span>

- <span style="color: green">当参数中是整数或者浮点数时，GREATEST 将返回其中最大的值；</span>
- <span style="color: green">当参数为字符串时， 返回字母表中顺序最靠后的字符；</span>
- <span style="color: green">当比较值列表中有 NULL 时，不能判断大小，返回值为 NULL。</span>

```sql
 SELECT GREATEST(1,0,2), GREATEST('b','a','c'), GREATEST(1,NULL,2);
```

## 8、BETWEEN AND 运算符

- <span style="color: green">BETWEEN 运算符使用的格式通常为 SELECT D FROM TABLE WHERE C BETWEEN A AND B，此时，当 C 大于或等于 A，并且 C 小于或等于 B 时，结果为 1，否则结果为 0。</span>

```sql
 SELECT 1 BETWEEN 0 AND 1, 10 BETWEEN 11 AND 12, 'b' BETWEEN 'a' AND 'c';
```

## 9、IN 运算符

- <span style="color: green"> IN 运算符用于判断给定的值是否是 IN 列表中的一个值，如果是则返回 1，否则返回 0。如果给 定的值为 NULL，或者 IN 列表中存在 NULL，则结果为 NULL。</span>

```sql
 SELECT 'a' IN ('a','b','c'), 1 IN (2,3), NULL IN ('a','b'), 'a' IN ('a', NULL);
```

## 10、NOT IN 运算符

- <span style="color: green"> NOT IN 运算符用于判断给定的值是否不是 IN 列表中的一个值，如果不是 IN 列表中的一 个值，则返回 1，否则返回 0。</span>

```sql
SELECT 'a' NOT IN ('a','b','c'), 1 NOT IN (2,3);
```

## 11、LIKE 运算符

- <span style="color: green"> LIKE 运算符主要用来匹配字符串，通常用于模糊匹配，如果满足条件则返回 1，否则返回 0。如果给定的值或者匹配条件为 NULL，则返回结果为 NULL。</span>

**LIKE 运算符通常使用如下通配符：**

- “%”：匹配 0 个或多个字符。
- “\_”：只能匹配一个字符。

```sql
# 查询last_name中包含字符'a'的员工信息
SELECT last_name
from employees
WHERE last_name LIKE '%a%';
# 查询last_name中以字符串'a'开头的员工信息
SELECT last_name
from employees
WHERE last_name LIKE '%a%';
# 查询last_name中包含字符'a'且包含字符'e'的员工信息
-- 写法一
SELECT last_name
from employees
WHERE last_name LIKE '%a%' AND last_name LIKE '%e%';
-- 写法二
SELECT last_name
from employees
WHERE last_name LIKE '%a%e%' OR last_name LIKE '%e%a%';
# 查询第二个字符是'a'的员工信息
SELECT last_name
from employees
WHERE last_name LIKE '_a%';
# 查询第三个字符是'a'的员工信息
SELECT last_name
from employees
WHERE last_name LIKE '__a%';
# 查询第二个字符是'a'的员工信息
SELECT last_name
from employees
WHERE last_name LIKE '_a%';
# 查询第二个字符是_且第三个字符是'a'的员工信息
-- 需要使用转义字符：\
SELECT last_name
from employees
WHERE last_name LIKE '_\_a%';
-- 或者
SELECT last_name
from employees
WHERE last_name LIKE '_$_a%' ESCAPE '$';
```

##   12、REGEXP/RLIKE运算符

<span style="color: green"> REGEXP运算符用来匹配字符串，语法格式为： expr REGEXP 匹配条件 。如果expr满足匹配条件，返回1，否则返回0</span>

+ ‘^’匹配以该字符后面的字符开头的字符串。
+ ‘$’匹配以该字符前面的字符结尾的字符串。 
+ ‘.’匹配任何一个单字符。
+ “[...]”匹配在方括号内的任何字符。例如，“[abc]”匹配“a”或“b”或“c”。为了命名字符的范围，使用一 个‘-’。“[a-z]”匹配任何字母，而“[0-9]”匹配任何数字。 
+ 
+ ” * “  匹配零个或多个在它前面的字符。例如，“x * ”匹配任何数量的‘x’字符，“[0-9]*”匹配任何数量的数字， 而“*”匹配任何数量的任何字符。

```sql
 SELECT 'shkstart' REGEXP '^s', 'shkstart' REGEXP 't$', 'shkstart' REGEXP 'hk';
 SELECT 'atguigu' REGEXP 'gu.gu', 'atguigu' REGEXP '[ab]';
```

#  三、逻辑运算符

<span style="color: green">逻辑运算符主要用来判断表达式的真假，在MySQL中，逻辑运算符的返回结果为1、0或者NULL。</span>

| 运算符     | 作用     | 示例                                       |
| ---------- | -------- | ------------------------------------------ |
| NOT 或 !   | 逻辑非   | **SELECT NOT A**                           |
| AND 或 &&  | 逻辑与   | **SELECT A AND B **<br/>**SELECT A && B**  |
| OR 或 \|\| | 逻辑或   | **SELECT A OR B **<br/>**SELECT A \|\| B** |
| XOR        | 逻辑异或 | **SELECT A XOR B**                         |

##  1、逻辑非运算符

+ <span style="color: green">符逻辑非（NOT或!）运算符表示当给定的值为0时返回1；</span>
+ <span style="color: green">当给定的值为非0值时返回0</span>
+ <span style="color: green"> 当给定的值为NULL时，返回NULL。</span>

```sql
SELECT NOT 1, NOT 0, NOT(1+1), NOT !1, NOT NULL;
```

##  2、逻辑与运算符

+ <span style="color: green"> 逻辑与（AND或&&）运算符是当给定的所有值均为非0值，并且都不为NULL时，返回 1</span>
+ <span style="color: green">当给定的一个值或者多个值为0时则返回0；否则返回NULL。</span>

```sql
SELECT employee_id, last_name, job_id, salary
FROM employees
WHERE salary >=10000
AND job_id LIKE '%MAN%';
```

##  3、逻辑或运算符

+ <span style="color: green"> 逻辑或（OR或||）运算符是当给定的值都不为NULL，并且任何一个值为非0值时，则返 回1，否则返回0；</span>
+ <span style="color: green">当一个值为NULL，并且另一个值为非0值时，返回1，否则返回NULL；</span>
+ <span style="color: green">当两个值都为 NULL时，返回NULL。</span>

```sql
#查询基本薪资不在9000-12000之间的员工编号和基本薪资
SELECT employee_id,salary FROM employees
WHERE NOT (salary >= 9000 AND salary <= 12000);

SELECT employee_id,salary FROM employees
WHERE salary <9000 OR salary > 12000;

SELECT employee_id,salary FROM employees
WHERE salary NOT BETWEEN 9000 AND 12000;
```

**注意：** OR可以和AND一起使用，但是在使用时要注意两者的优先级，由于AND的优先级高于OR，因此先 对AND两边的操作数进行操作，再与OR中的操作数结合。

##  4、逻辑异或运算符

+ <span style="color: green">逻辑异或（XOR）运算符是当给定的值中任意一个值为NULL时，则返回NULL；</span>
+ <span style="color: green">如果 两个非NULL的值都是0或者都不等于0时，则返回0；</span>
+ <span style="color: green">如果一个值为0，另一个值不为0时，则返回1。</span>

```sql
select last_name,department_id,salary
from employees
where department_id in (10,20) XOR salary > 8000;
```

#  四、位运算符

**很少使用**

<span style="color: red">位运算符是在二进制数上进行计算的运算符。位运算符会先将操作数变成二进制数，然后进行位运算， 最后将计算结果从二进制变回十进制数。</span>

#  五、运算符的优先级

<span style="color: green">数字编号越大，优先级越高，优先级高的运算符先进行计算。可以看到，赋值运算符的优先级最低，使 用“()”括起来的表达式的优先级最高</span>

| 优先级 | 运算符                                             |
| ------ | -------------------------------------------------- |
| 1      | :=， =                                             |
| 2      | \|\|，OR，XOR                                      |
| 3      | &&，AND                                            |
| 4      | NOT                                                |
| 5      | BETEEN，CASE，WHEN，THEN 和 ELSE                   |
| 6      | =，<=>，>=，>，<=，<，<>，!=，IS，LIKE，REGEXP和IN |
| 7      | \|                                                 |
| 8      | &                                                  |
| 9      | << 与 >>                                           |
| 10     | -和+                                               |
| 11     | * ，/，DIV，%和MOD                                 |
| 12     | ^                                                  |
| 13     | -（负号）和 ~（按位取反）                          |
| 14     | !                                                  |
| 15     | ()                                                 |

#  视频目前看到第20章，每天2章。 2023/9/3