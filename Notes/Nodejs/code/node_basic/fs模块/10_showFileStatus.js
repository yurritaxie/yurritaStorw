const fs = require("fs");

fs.stat("./../file/复制春晓1.txt", (err, data) => {
  if (err) {
    console.log("查看文件状态失败");
    return;
  }
  // console.log('查看成功', data);
  // isFile  检测目标资源是否是文件
  console.log(data.isFile());
  // isDirectory 检测目标资源是否是文件夹
  console.log(data.isDirectory());
});
/**
 * Stats {
  dev: 2424516231, 
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 12947848928979052,
  size: 68,
  blocks: 0,
  atimeMs: 1693744555840.2776,
  mtimeMs: 1689687894761.985,
  ctimeMs: 1691924572289.957,
  birthtimeMs: 1689687894758.4265,
  atime: 2023-09-03T12:35:55.840Z,
  mtime: 2023-07-18T13:44:54.762Z,
  ctime: 2023-08-13T11:02:52.290Z,
  birthtime: 2023-07-18T13:44:54.758Z
}
 */
