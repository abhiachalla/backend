
  

  module.exports = (app) => {
    app.get('/hello', (req, res) => {
      res.send('Life is good!')
    });
   }
