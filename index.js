import wa from '@open-wa/wa-automate'
import moment from 'moment-timezone'
import Folder from './lib/Folder.js'
import lineReader from 'line-reader'
Folder()

async function Bot_Adhkar() {
  try {
    console.log(
      '                  Start ' + moment.tz('Asia/Riyadh').format('LT')
    )

    const options = {
      multiDevice: true,
      authTimeout: 0,
      blockCrashLogs: true,
      useChrome: true,
      autoRefresh: true,
      cacheEnabled: true,
      qrRefreshS: 0,
      throwErrorOnTosBlock: false,
      deleteSessionDataOnLogout: false,
      skipUpdateCheck: false,
      bypassCSP: true,
      headless: false,
      logConsole: false,
      qrTimeout: 0,
      sessionId: 'Id',
    }

    let client = await wa.create(options)
    lineReader.eachLine('numbers.txt', async function (line, last) {
      console.log(line)
      await client
        .sendText(
          `${line}@c.us`,
          'تذكير: اللقاء التنويري اليوم الساعة 7 مساءًا في مقر كودد\nيرجى الدخول على منصة البرنامج في دسكورد من خلال هذا الرابط\n https://discord.gg/NqVZujPu\nجميع التواصل سوف يكون عن طريق المنصة وليس الوتساب عند ابتداء البرنامج'
        )
        .catch((error) => console.log('Error'))
    })
  } catch (error) {
    console.log('Error')
  }
}

Bot_Adhkar()
