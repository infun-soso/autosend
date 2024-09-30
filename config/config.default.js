/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1632111171422_6113';

  // add your middleware config here
  config.middleware = [];
  // 天气接口配置
  config.weather = {
    key: '71d3bf9ee4c940e49739d6a1e9f161b0'
  };
  // 测试 微信公众号
  config.weChat = {
    appld: 'wx895f83ca01b0ae94',
    secret: '87dc62f8a0f5df0c9ded0dd3eb40247e',
    // 用户的openid
    users: [
      'opQCY5q4cVc-yKPZi0nfFJXsMuYU',
      'opQCY5iHtsoH34Gjg6UyzfndS_ss'
    ],
    daily: 'QBTeM6UZU0ocx7mcmxeXpuTQJi7GB-WPGNqoSBB6LjA', // 普通模板
    // marry: '********************', // 结婚纪念日模板
    wageDay: 'DCE3sEZmPV2Fza3NaydDNBjn3EQw7g3N-EUqGxwj9ro', // 工资日模板
    birthday: 'gR2Rq3FMUYH9gcckSAXnQ7VNr0GxrcWw73EWs5PnQqs', // 生日模板
  };

  // 时间
  config.time = {
    wageDay: 10, // 工资日
    love: '2020-12-22', // 相爱日期
    // marry: '2020-11-27', // 结婚纪念日
    // 生日配置
    // 老家过阴历生日，这里暂时写死
    birthday: {
      2021: '2021-10-13',
      2022: '2022-10-13',
      2023: '2023-10-13',
      2024: '2024-10-13',
      2025: '2025-10-13',
      2026: '2026-10-13',
    }, // 每年生日 阳历
    birthYear: 1993,
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
