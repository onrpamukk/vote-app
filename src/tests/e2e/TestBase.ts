import Nightmare from 'nightmare';

const nightmare = new Nightmare({ typeInterval: 30 });

const timeOut = 200000;
jest.setTimeout(timeOut);

const waitTime = 3000;

const waitTime2 = 10000;

const baseUrl = "http://localhost:3000";

const nightmareGoTo = (postUrl: string = '') => nightmare.goto(`${baseUrl}${postUrl}`);

export const TestBase = {
    nightmare,
    nightmareGoTo,
    timeOut,
    waitTime,
    waitTime2
}