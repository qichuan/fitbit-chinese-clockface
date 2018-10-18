

## Font source
NotoSans
## Conversion

convert -background none -fill white -font ./NotoSansCJKtc-Bold.otf -pointsize 150 label:"壹" ./resources/one.png
convert -background none -fill white -font ./font/NotoSansCJKtc-Bold.otf -pointsize 150 label:"貳" ./resources/two.png


convert -background none -fill white -font ./font/NotoSansCJKtc-Bold.otf -pointsize 150 label:"貳" -size 150x150 +antialias -trim ./resources/img/num_2.png