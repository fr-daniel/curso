'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var users = [
  {
    username: 'daniel',
    name: 'Daniel',
    lastname: 'Lima',
    age: 19
  },
  {
    username: 'joao',
    name: 'João',
    lastname: 'Silva',
    age: 34
  },
  {
    username: 'larissa',
    name: 'Larissa',
    lastname: 'Lima',
    age: 21
  }
]

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( cors() );

app.get('/', function( req, res ){
  res.json( { response: 'Home' } );
});

app.get('/user', function( req, res ){
  res.json( { responde: 'User' } );
});

app.get('/user/:username', function( req, res ){
  var username = req.params.username;
  var hasUser = users.some( function( user ){
    return user.username === username;
  });

  if( hasUser )
    return res.json( users.filter( function( user ){
      return user.username == username; 
    })[0] );
  
  res.status(404).json( { error: 'Usuário não encontrado!' } );
});

app.post('/user', function( req, res ){
  var username = req.body.username;
  var name = req.body.name;
  var lastname = req.body.lastname;
  var age = req.body.age;

  var hasUser = users.some( function( user ){
    return user.username === username;
  });

  if( hasUser )
    return res.json( users );

  users.push({
    username: username, 
    name: name, lastname: 
    lastname, 
    age: age 
  });

  res.json( users );
});

app.listen(3000);
