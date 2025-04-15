import Database from 'better-sqlite3';
import { Organization, Account } from './types';

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomDate(startYear: number, endYear: number) {
    const startDate = new Date(`${startYear}-01-01`);
    const endDate = new Date(`${endYear}-12-31`);
    const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
    return new Date(randomTime).toISOString().slice(0, 19).replace('T', ' ');
}


const db = new Database('./organizationsdatabase.sqlite', { verbose: console.log });


const insertTransaction = db.transaction(() => {

    const organizations = [
        { name: 'Organization Alpha' },
        { name: 'Organization Bravo' },
    ];

    organizations.forEach(({ name }) => {
        db.prepare('INSERT INTO organizations (name) VALUES (?)').run(name);
    });

    const orgIds = db.prepare('SELECT id FROM organizations').all();

    const accounts = [
        //@ts-ignore
        { name: 'McDonalds', organization_id: orgIds[0].id },
        //@ts-ignore
        { name: 'Burger King', organization_id: orgIds[0].id },
        //@ts-ignore
        { name: 'KFC', organization_id: orgIds[1].id },
        //@ts-ignore
        { name: 'Taco Bell', organization_id: orgIds[1].id },
    ];

    accounts.forEach(({ name, organization_id }) => {
        db.prepare('INSERT INTO accounts (name, organization_id) VALUES (?, ?)').run(name, organization_id);
    });

    const accountIds = db.prepare('SELECT id, organization_id FROM accounts').all();
    //@ts-ignore
    accountIds.forEach(({ id, organization_id }) => {
        const deals = [
            { account_id: id, value: getRandomInt(5000, 100000), start_date: getRandomDate(2024, 2024), end_date: getRandomDate(2025, 2025), name: `Deal 1` },
            { account_id: id, value: getRandomInt(5000, 100000), start_date: getRandomDate(2024, 2024), end_date: getRandomDate(2025, 2025), name: `Deal 2` }
        ];

        deals.forEach(({ account_id, value, start_date, end_date, name }) => {
            db.prepare('INSERT INTO deals (name, account_id, value, start_date, end_date) VALUES (?, ?, ?, ?, ?)').run(name, account_id, value, start_date, end_date);
        });
    });
});

export default insertTransaction;