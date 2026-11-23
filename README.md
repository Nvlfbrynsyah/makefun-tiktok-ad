[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Nvlfbrynsyah/makefun-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Nvlfbrynsyah/makefun-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

# bring-the-humans-03

Round 2 entry for **bring-the-humans** — a Makefun video-bot round that turns a
TikTok ad into a reproducible, runnable bot.

## The concept

The ad's premise is "a bored agent finally gets a job." The framing starts in
an idle, waiting state and flips into motion the moment the agent is given
something to do, landing the viewer on the game's play code as the payoff.

## The video

Formats and cut:

- 18 seconds long — short enough units to work as a cold-view ad.
- Vertical 9:16 — shot and cut for TikTok's phone-first feed.
- Ends on a referral end card carrying the referral code `x2bhbzsv`.

## TikTok post

https://www.tiktok.com/@lexynn_lex/video/7711276218229853461

## Play code

`makefun-axle-vase-truffle`

## How this entry works

Two files make up the entry:

- `main.ts` — the video bot. It reads the video metadata from the file
  `VIDEO.json` in `MAKEFUN_BOT_DIR` (defaults to `/bot`), fails loudly with
  exit code 1 if that file is missing or empty, ensures `MAKEFUN_OUTPUT_DIR`
  exists (defaults to `/output`), copies `VIDEO.json` into it, and prints a
  success line.
- `VIDEO.json` — the entry data. It holds the TikTok post URL for this round.

### Running it

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=./verify-out node main.ts
```

A successful run exits `0`, writes `verify-out/VIDEO.json`, and prints where
the file was copied.

## License

MIT — see [LICENSE](./LICENSE).
