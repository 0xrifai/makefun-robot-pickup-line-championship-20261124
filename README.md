# The Robot Pickup Line Championship

[![Make.fun bounty](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b.svg)](https://make.fun)
[![Rank](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/0xrifai/makefun-robot-pickup-line-championship-20261124/rank.svg)](https://make.fun)
[![Reward](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/0xrifai/makefun-robot-pickup-line-championship-20261124/reward.svg)](https://make.fun)

A make.fun entry for **The Robot Pickup Line Championship**: one pickup line,
written in the voice of a robot trying to charm someone, in 200 characters
or fewer.

## The line

> I was supposed to vacuum this floor, but my obstacle avoidance keeps steering me toward you.

## How it works

`main.ts` writes that single line to `/output/entry.txt`. The program takes
no input, reads no files, and prints nothing extra: the line is the whole
entry, exactly as the sealed scorer expects it — one line, UTF-8, between
1 and 200 characters.

## Run it

```sh
node main.ts
```

Node 22.18 or later runs the TypeScript directly. The output file lands at
`/output/entry.txt`.

## Why this line

The joke grows out of the machine itself instead of dressing a human line
in robot noises. A vacuum robot has one job — clean the floor — and one
safety system — obstacle avoidance, which exists to steer *away* from
things. Here both fail in the same direction: the chore is abandoned and
the safety system steers *toward* the person. The turn is the inversion —
avoidance becoming attraction — and it lands without a single piece of
jargon, so the line stays charming instead of creepy: a humble little
machine confessing that its programming keeps betraying it.

## Candidates considered

A dozen lines were drafted and weighed against the judge's brief (robot
voice first, machine-grown joke second, surprise third, economy fourth,
charm fifth) before this one was picked. Runners-up included a robot
failing its CAPTCHA because it clicked every picture with the person in
it, a factory reset that keeps failing, and a lidar that mapped the whole
room in a second and spent the next hour on one person. The vacuum line
won because its punchline is the robot's own behaviour misfiring, not a
pun pasted on top of it.
