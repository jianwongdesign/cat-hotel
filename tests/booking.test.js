import test from 'node:test';
import assert from 'node:assert/strict';
import { rooms, addDays, dayCount, validateStay, quote, localDate } from '../src/booking.js';
const start=addDays(localDate(),10), end=addDays(start,3);
test('billing preview counts calendar days across month and leap-year boundaries',()=>{
 assert.equal(dayCount('2028-02-28','2028-03-01'),2);
 assert.equal(dayCount('2026-10-30','2026-11-02'),3);
 assert.equal(dayCount('2026-11-01','2026-11-01'),0);
 assert.equal(dayCount('2026-11-02','2026-11-01'),0);
 assert.equal(dayCount('2026-02-30','2026-03-04'),0);
 assert.equal(dayCount('','2026-03-04'),0);
});
test('rejects past dates, empty dates, and invalid guest counts',()=>{
 for(const stay of [{start:'2020-01-01',end:'2020-01-03',cats:1},{start:'',end,cats:1},{start,end,cats:0},{start,end,cats:7},{start,end,cats:1.5}]) assert.ok(validateStay(stay));
 assert.equal(validateStay({start,end,cats:1}),'');
});
test('prices two cats at base suite rate, applies surcharge to third and subsequent cats',()=>{
 assert.equal(quote(rooms[0],{start,end,cats:1}).total,135);
 assert.equal(quote(rooms[1],{start,end,cats:2}).total,240);
 assert.deepEqual(quote(rooms[2],{start,end,cats:5}),{days:3,base:300,extra:180,total:480});
 assert.equal(quote(rooms[2],{start,end,cats:6}).total,540);
});
test('rejects over-capacity selections and invalid ranges before computing a quote',()=>{
 assert.throws(()=>quote(rooms[0],{start,end,cats:3}),/cannot accommodate/);
 assert.throws(()=>quote(rooms[1],{start,end,cats:5}),/cannot accommodate/);
 assert.throws(()=>quote(rooms[2],{start,end:start,cats:1}),/check-out/);
});
