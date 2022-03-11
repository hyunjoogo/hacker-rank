Function Description

Complete the breakingRecords function in the editor below.
breakingRecords has the following parameter(s):
int scores[n]: points scored per game

                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1

Returns

int[2]: An array with the numbers of times she broke her records.
Index 0 is for breaking most points records,
and index 1 is for breaking least points records.


Input Format

The first line contains an integer n , the number n of games.
The second line n contains  space-separated integers describing the respective values of .

첫줄은 스코어 array의 길이
두번째 줄은 공백으로 나누어진 점수들
예시 : 
- 4
- 5 4 2 10


# 요구사항
# ```[최고점수갱신횟수, 최저점수갱신횟수]``` array를 리턴하라

## 첫번째 기록은 카운팅이 안된다.
최저점수, 최고점수로 기록
## 두번째 기록부터 비교
기록이 
- 최저점수 보다 작으면 최저점수 갱신, 최저갱신횟수 추가
- 최고점수 보다 크면 최고점수 갱신, 최고갱신횟수 추가
- 최저점수나 최고점수와 같다면 패스
## 모든 기록을 비교했다면
최고점수갱신횟수, 최저점수갱신횟수 array로 리턴
