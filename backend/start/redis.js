'use strict';

/*
|--------------------------------------------------------------------------
| Redis Subscribers
|--------------------------------------------------------------------------
|
| Here you can register the subscribers to redis channels. Adonis assumes
| your listeners are stored inside `app/Listeners` directory.
|
*/

// const Redis = use('Redis')
const Env = use('Env');

module.exports = {
  connection: Env.get('REDIS_CONNECTION', 'local'),

  local: {
    host: '127.0.0.1',
    port: 6379,
    password: null,
    db: 0,
    keyPrefix: '',
  },

  cluster: {
    clusters: [
      {
        host: '127.0.0.1',
        port: 6379,
        password: null,
        db: 0,
      },
      {
        host: '127.0.0.1',
        port: 6379,
        password: null,
        db: 0,
      },
    ],
  },
};

/**
 * Inline subscriber
 */
// Redis.subscribe('news', async () => {
// })

/**
 * Binding method from a module saved inside `app/Listeners/News`
 */
// Redis.subcribe('news', 'News.onMessage')
