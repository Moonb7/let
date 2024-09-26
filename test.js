app.get('/signIn', (req, res) => {
  const { userId, userpassword } = req.body;
  console.log(userInfos[0].id);
  for (let i = 0; i < userInfos.length; i++) {
    if (userId === userInfos[i].id && userpassword === userInfos[i].password) {
      return res.status(200).json({ message: '로그인 성공' });
    }
  }
  return res.status(400).json({ message: '로그인 실패' });
});
