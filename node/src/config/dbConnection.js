const mongoose = require('mongoose')

module.exports = () => {
  
  mongoose.connect('mongodb+srv://debs:mgh35DOoB5gTMiBh@cluster0.vuyop.mongodb.net/test?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  mongoose.connection.once('open', () => {
    console.log('banco de dados pegando');
  });
  
};
