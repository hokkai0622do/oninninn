/*:
 * @plugindesc タイトルのコマンドウィンドウのの選択画面を変更します。
 * @author riru
 *
 * @param Window X
 * @desc コマンドウィンドウのX座標
 * @default 288
 *
 * @param Window Y
 * @desc コマンドウィンドウのY座標
 * @default 384
 *
 * @param Background
 * @desc コマンドウィンドウの背景。0:通常 1:暗くする 2:透明
 * @default 0
 *
 * @param Width
 * @desc コマンドウィンドウの幅
 * @default 240
 *
 * @param Maxcols
 * @desc コマンドウィンドウの列数。コマンド数記入で横長に
 * @default 1
 *
 * @param Align
 * @desc コマンドウィンドウ内容の整列。0:左揃え 1:中央揃え 2:右揃え
 * @default 0
 *
 * @param Font Size
 * @desc フォントサイズ(36以上だと元の文字が見切れます
 * @default 28
 *
 * @param SPFont Color
 * @desc 重ねるフォントの色
 * @default #ffffff
 *
 * @param SPColorTone_r
 * @desc 重ねるフォントの色調(赤)
 * @default 0
  *
 * @param SPColorTone_g
 * @desc 重ねるフォントの色調(緑)
 * @default 0
 *
 * @param SPColorTone_b
 * @desc 重ねるフォントの色調(青)
 * @default 0
 *
 * @param SPColorTone_gr
 * @desc 重ねるフォントの色調(彩度)
 * @default 0
 *
 * @param SPFont Y
 * @desc 重ねるフォントのY座標補正（別プラグインのプラグイン字下げ対策）
 * @default 0
 *
 * @param Opacity
 * @desc コマンドウィンドウの元の文字の透明度
 * @default 255
 *
 * @help 
 *
 * タイトルコマンドカスタマイズプラグイン ver 1.01
 *
 *＜使い方＞
 *各パラメータを記入してお好みの仕様にしてください
 *
 * ＜規約＞
 * 有償無償問わず使用できます。改変もご自由にどうぞ。使用報告もいりません。２次配布は作成者を偽らなければOKです（ただし素材単品を有償でやりとりするのはNG）。
 *著作権は放棄していません。使用する場合は以下の作者とURLをreadmeなどどこかに記載してください
 *
 * ＜作者情報＞
 *作者：riru 
 *HP：ガラス細工の夢幻
 *URL：http://garasuzaikunomugen.web.fc2.com/index.html
 *
 *＜更新履歴＞
 * *2016年4月15日9時　Ver1.02。直接的な問題はないものの他のプラグイン等に影響を及ぼす可能性があった箇所を微修正。
 *2016年4月15日　Ver1.01。フォントサイズを大きくした際の文字きれ対策と別プラグインのルビ振り対応として重ね文字のY座標補正を追加。
 */