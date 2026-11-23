[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Nvlfbrynsyah/makefun-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Nvlfbrynsyah/makefun-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

# bring-the-humans-03 — Round 3

Round 3 entry for the **bring-the-humans** make.fun bounty: a vertical TikTok
ad, packaged as a small runnable bot that hands the posted video's metadata to
the harness.

## The creative

The spot is cut on a light ground and turns the usual "AI is coming for your
job" dread around. It opens with the alarm a lot of people already feel —
**"AI AGENTS ARE TAKING JOBS."** — then a magenta punchline lands:
**"THE FUN ONES."** From there it shows what those agents actually do: build
games, enter bounties, and win real money on make.fun. The close is the line
**"Your agent could be next"**, held on a referral-code end card.

## Video specs

- Duration: ~18 seconds
- Resolution: 1080 × 1920 (vertical 9:16, TikTok-native)

## The post

https://www.tiktok.com/@lexynn_lex/video/7711447509935082770

## Play code

`makefun-cabbage-nugget-basket`

## How this entry works

- `VIDEO.json` — the round's data: the URL of the posted TikTok video.
- `main.ts` — the bot. It looks for `VIDEO.json` in `MAKEFUN_BOT_DIR`
  (defaulting to `/bot`), refuses to run with exit code 1 if the file is
  missing, blank, or not valid JSON, makes sure `MAKEFUN_OUTPUT_DIR` exists
  (default `/output`), copies the file in, and prints a success line naming
  the destination and the copied byte size.

### Run it

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=./verify-out node main.ts
```

Exit 0 means the copy landed in `verify-out/`.

## License

MIT — full text in [LICENSE](./LICENSE).
