
var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [ 
{
  'click .fb-KangarooBackground' : '请点击球队名，选择主客队<br><span class="rowSecond">(如果有小锁图标代表已封盘)</span>',
  'showSkip' : false,
  'showNext' : false
},
{
  'click .odds-65w' : '请选择赔率',
  'showSkip' : false,
  'showNext' : false
},
{
  'click .s-noPanelLine' : '请点击选择下注金额',
  'showSkip' : false,
  'showNext' : false
}, 
{
  'click .bet-submit' : '确认无误，点击“投注”按钮',
  'showSkip' : false,
  'showNext' : false
},
{
  'click .closeOrder' : '恭喜，下注完成!',
  'showSkip' : false,
  'showNext' : false
} 
];

enjoyhint_instance.set(enjoyhint_script_steps);
enjoyhint_instance.run();
