/* eslint-disable */
import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'vvliebe',
    password: '123456',
    avatar: 'https://o0p2nwku4.qnssl.com/favicon.ico'
  }
];

const Users = [];
const userCount = 1000;

for (let i = 0; i < userCount; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    address: Mock.mock('@county(true)'),
    'age|18-60': 1,
    // date: Mock.Random.date('yyyy-MM-dd HH:mm:ss'),
    date: Number(Mock.Random.datetime('T')),
    modifydate: Number(new Date().getTime())
  }));
}

export { LoginUsers, Users };
/* eslint-disable */