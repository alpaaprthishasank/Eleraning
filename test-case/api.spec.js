var chai=require('chai')
var assert=chai.assert;
var should=chai.should()
var expect=chai.expect;
var server=require('../app')
let chaiHttp=require('chai-http');
const { response } = require('express');
chai.use(chaiHttp)
describe('Task home',function(){
    it('get home page',function(done){
      chai.request(server)
      .get('/home')
      .end((err,response)=>{
        expect(response.status).to.be.equal(200)
       // expect(response.body).to.have.all.keys('data','statusText');
        done();
      }
      )
    })
})

describe('Task register',function(){
  it('get Register page',function(done){
    chai.request(server)
    .get('/')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})


describe('Task login',function(){
  it('get login page',function(done){
    chai.request(server)
    .get('/login')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})


describe('Task c',function(){
  it('get c_course page',function(done){
    chai.request(server)
    .get('/c_course')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task cplusplus',function(){
  it('get c++ page',function(done){
    chai.request(server)
    .get('/cplusplus')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task java',function(){
  it('get java page',function(done){
    chai.request(server)
    .get('/java')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task ds',function(){
  it('get ds page',function(done){
    chai.request(server)
    .get('/Datastructres')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task Algo',function(){
  it('get Algo page',function(done){
    chai.request(server)
    .get('/Algorithms')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task cn',function(){
  it('get networks page',function(done){
    chai.request(server)
    .get('/cn')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task python',function(){
  it('get python page',function(done){
    chai.request(server)
    .get('/python')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task Os',function(){
  it('get Os page',function(done){
    chai.request(server)
    .get('/Operating_Systems')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task DBMS',function(){
  it('get DBMS page',function(done){
    chai.request(server)
    .get('/DBMS')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task c video1',function(){
  it('get c_course video',function(done){
    chai.request(server)
    .get('/cplusplus_video')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task c video2',function(){
  it('get c_course video',function(done){
    chai.request(server)
    .get('/cplusplus')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task c video3',function(){
  it('get c_course video',function(done){
    chai.request(server)
    .get('/c_video')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task c quiz',function(){
  it('get c_course quiz',function(done){
    chai.request(server)
    .get('/c_quiz')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task cn video1',function(){
  it('get cn video1',function(done){
    chai.request(server)
    .get('/cn1')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})


describe('Task cn video2',function(){
  it('get cn video2',function(done){
    chai.request(server)
    .get('/cn2')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})


describe('Task cn video3',function(){
  it('get cn video3',function(done){
    chai.request(server)
    .get('/cn3')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task cn quiz',function(){
  it('get cn quiz',function(done){
    chai.request(server)
    .get('/cnquiz')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task DBms video1',function(){
  it('get dbms video1',function(done){
    chai.request(server)
    .get('/dbms1')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task DBms video2',function(){
  it('get dbms video2',function(done){
    chai.request(server)
    .get('/dbms2')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task DBms video3',function(){
  it('get dbms video3',function(done){
    chai.request(server)
    .get('/dbms3')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task Algo quiz',function(){
  it('get Algo quiz',function(done){
    chai.request(server)
    .get('/Algoquiz')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task ds quiz',function(){
  it('get ds quiz',function(done){
    chai.request(server)
    .get('/Dsquiz')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task java quiz',function(){
  it('get java quiz',function(done){
    chai.request(server)
    .get('/Javaquiz')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task python quiz',function(){
  it('get python quiz',function(done){
    chai.request(server)
    .get('/pythonquiz')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})

describe('Task Os quiz',function(){
  it('get os quiz',function(done){
    chai.request(server)
    .get('/Osquiz')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})  

describe('Task Os video',function(){
  it('get os video',function(done){
    chai.request(server)
    .get('/os1')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})  

describe('Task Os video 3',function(){
  it('get os video 3',function(done){
    chai.request(server)
    .get('/os3')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
})  

describe('Task Os video 2',function(){
  it('get os video 2',function(done){
    chai.request(server)
    .get('/os2')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 

describe('Task java video 1',function(){
  it('get java video 1',function(done){
    chai.request(server)
    .get('/Java1')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 

describe('Task java video 2',function(){
  it('get  java video 2',function(done){
    chai.request(server)
    .get('/Java2')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 

describe('Task java video 2',function(){
  it('get java video 3',function(done){
    chai.request(server)
    .get('/Java3')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 

describe('Task python video 1',function(){
  it('get python video 1',function(done){
    chai.request(server)
    .get('/python1')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 

describe('Task python video 2',function(){
  it('get python video 2',function(done){
    chai.request(server)
    .get('/python2')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 

describe('Task python video 3',function(){
  it('get python video 3',function(done){
    chai.request(server)
    .get('/python3')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 

describe('Task Algo video 1',function(){
  it('get Algo video 1',function(done){
    chai.request(server)
    .get('/Algo1')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 

describe('Task Algo video 2',function(){
  it('get Algo video 2',function(done){
    chai.request(server)
    .get('/Algo2')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 

describe('Task Algo video 3',function(){
  it('get Algo video 3',function(done){
    chai.request(server)
    .get('/Algo3')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 

describe('Task C video 1',function(){
  it('get C video 1',function(done){
    chai.request(server)
    .get('/C1')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 

describe('Task C video 2',function(){
  it('get C video 2',function(done){
    chai.request(server)
    .get('/C2')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 

describe('Task C video 3',function(){
  it('get C video 3',function(done){
    chai.request(server)
    .get('/C3')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    } 
    )
  })
}) 


describe('Task C plus video 1',function(){
  it('get C plus video 1',function(done){
    chai.request(server)
    .get('/cplus1')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 
describe('Task C plus video 3',function(){
  it('get C plus video 3',function(done){
    chai.request(server)
    .get('/cplus3')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 
describe('Task C plus video 2',function(){
  it('get C plus video 2',function(done){
    chai.request(server)
    .get('/cplus2')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 

describe('Task dsa video 1',function(){
  it('get dsa video 1',function(done){
    chai.request(server)
    .get('/cplusplus_video')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 

describe('Task dsa video2',function(){
  it('get dsa video 2',function(done){
    chai.request(server)
    .get('/c_video')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 
describe('Task dsa video 3',function(){
  it('get dsa video 3',function(done){
    chai.request(server)
    .get('/cplusplus1')
    .end((err,response)=>{
      expect(response.status).to.be.equal(200)
     // expect(response.body).to.have.all.keys('data','statusText');
      done();
    }
    )
  })
}) 

