# 基本的sql语句
**SELECT...**

```sql
SELECT 1; # 没有任何子句
SELECT 9/2; # 没有任何子句
```

**SELECT...FROM**

```sql
//语法
SELECT # 标识选择哪些列
FROM 标识从哪个表中选择
//选择全部列 -- 不推荐使用
SELECT*FROM 表名称
```

**列的别名**

```sql
// 列表和别名之间加入关键字as，别名使用双引号
SELECT 列a的名称 AS 列a的别名 FROM 表格名称
// 另一种写法
SELECT 列a的名称 "列的别名" FROM 表格名称
```

**去除重复行**

```sql
// 在SELECT语句中使用关键字DISTINCT去除重复行
SELECT DISTINCT 列的名称 FROM 表格名称
```

**空值参与运算**

```js
// 所有运算符或者列值遇到null值，运算的结果都为null
```

**着重号**

```js
// 需要保证表中的字段、表名等没有和保留字、数据库系统或常用方法冲突。如果真的相同，请在SQL语句中使用一对``（着重号）引起来
```

**显示表结构**

```sql
DESCRIBE 表名称
或
DESC 表名称
```

- Field：表示字段名称
- Type：标识字段类型，这里barcode、goodname是文本型的，price是整数类型的。
- null：表示该列是否可以存储null值
- Key：表示该列是否已编制索引。PRI表示该列是表主键的一部分；UNI表示该列是UNIQUE索引的一 部分；MUL表示在列中某个给定值允许出现多次。
- Default：表示该列是否有默认值，如果有，那么值是多少。
- Extra：表示可以获取的与给定列有关的附加信息，例如AUTO_INCREMENT等。

**条件查询**

```sql
# 语法
SELECT 字段1，字段2
FROM 表名
WHERE 过滤条件
```

- 使用WHERE子句，将不满足条件的行过滤掉
- WHERE子句紧随FROM子句



