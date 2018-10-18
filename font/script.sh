#!/bin/bash
# A simple t o generate number images from typface file
i=0;
for j in 零 壹 貳 叁 肆 伍 陸 柒 捌 玖 
do 
    # Bold number
    convert -background none -fill white -font ./NotoSansCJKtc-Bold.otf -pointsize 150 label:"$j" -size 150x150 +antialias -trim ../resources/img/bold_num_$i.png
    # Light number
    convert -background none -fill white -font ./NotoSansCJKtc-Light.otf -pointsize 150 label:"$j" -size 150x150 +antialias -trim ../resources/img/light_num_$i.png
    i=$(( $i + 1 ))
done