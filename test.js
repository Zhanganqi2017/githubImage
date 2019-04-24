// import testTX from "./src/testTX";

// import sum from './src/functions';
// test('sum', () => {
//     expect(sum(2, 2)).toBe(3);
// })

// import reverseWord from "./src/reverseWord"
// test("反转字符串", () => {
//     expect(reverseWord("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc")
// })

// import countBinarySubstrings from "./src/countBinarySubstrings"
// test("相同数量的连续1,和 0", () => {
//     expect(countBinarySubstrings("00110011")).toBe(6)
// })

// import letterCombinations from "./src/letterCombinations"
// test("电话号码对应字母", () => {
//     expect(letterCombinations("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
// })

// import hasGroupsSize from "./src/hasGroupsSizeX"
// test("卡牌分组", () => {
//     expect(hasGroupsSize([1, 2, 3, 4, 4, 3, 2, 1])).toEqual(true)
// })

// import ttt from "./src/testTX"
// test("妞妞", () => {
//         expect(ttt(['1', '2', '3', '3', '2'])).toEqual('Oh,no.')
//     })
// import ttt from "./src/testTX"
// test("妞妞", () => {
//     expect(ttt('12332')).toEqual('Oh,no.')
// })
// import restoreIpAddresses from './src/restoreIpAddresses.js'
// test("复原ip地址", () => {
//     expect((restoreIpAddresses("25525511135"))).toEqual(["255.255.11.135", "255.255.111.35"]);
// })

// import findSubstring from './src/findSubstring'
// test("串联所有单词的子串", () => {
//     expect((findSubstring("foobarfoobar", ["foo", "bar"]))).toEqual([0, 3, 6]);
// })

// import maximalRectangle from './src/maximalRectangle'
// test("最大矩阵", () => {
//     expect(maximalRectangle([
//         ["1", "0", "1", "0", "0"],
//         ["1", "0", "1", "1", "1"],
//         ["1", "1", "1", "1", "1"],
//         ["1", "0", "0", "1", "0"]
//     ])).toBe(6)
// })

// import jingdong from "./src/jingdong";
// test("京东", () => {
//     expect(jingdong(5, [5, 4, 3, 2, 1])).toEqual(4)
// })

import jingdong2 from "./src/jingdong2";
test("京东", () => {
    expect(jingdong2('00000000')).toEqual(0)
})

import FindContinuousSequence from './src/合为s的正整数列'
test("和为s的正整数列", () => {
    expect(FindContinuousSequence(100)).toEqual([

        [9, 10, 11, 12, 13, 14, 15, 16],
        [18, 19, 20, 21, 22]
    ])
})