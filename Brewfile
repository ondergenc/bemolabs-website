# Brewfile — developer tooling for working on bemolabs-website
#
# The site itself is static HTML/CSS/JS with NO build step and NO runtime
# dependencies. These tools are only what you need to *develop and ship*
# the site the way this repo does it:
#   - gh        : open/merge PRs for the feat -> qa -> main flow
#   - python3   : local preview server (`python3 -m http.server 8765`)
#   - ffmpeg    : extract a poster frame from a trailer for video thumbnails
#   - qrencode  : generate App Store QR codes
#
# Install everything with:
#   brew bundle --file=Brewfile
#
# Not listed (already on macOS, no install needed):
#   - git   : comes with the Xcode Command Line Tools (`xcode-select --install`)
#   - sips  : built into macOS, used to downscale/crop images

brew "gh"
brew "python@3.14"
brew "ffmpeg"
brew "qrencode"
