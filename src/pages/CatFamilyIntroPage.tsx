import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CatFamilyIntroPage: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  return (
    <div style={{ padding: 20, background: '#fafcff', minHeight: '100vh', boxSizing: 'border-box', paddingBottom: 100 }}>
      {/* Banner/宣传语 */}
      <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#ffb347', textAlign: 'center' }}>
        让爱有迹可循：带猫咪遇见血缘里的温柔 —— 与猫爸妈兄弟姐妹温情同框
      </div>
      {/* 核心宣传语 */}
      <div style={{ fontSize: 20, fontWeight: 600, margin: '24px 0 12px 0', textAlign: 'center' }}>
        推开这扇门，猫咪的'全家福'正在等你 —— 看得见的血缘，摸得着的温暖
      </div>
      <div style={{ fontSize: 16, color: '#ff4d4f', marginBottom: 24, textAlign: 'center' }}>
        不止买一只猫，更买下整个家族的温柔基因：让毛孩带你遇见它的爸爸妈妈
      </div>
      {/* 场景化文案 */}
      <div style={{ background: '#fffbe6', borderRadius: 12, padding: 16, marginBottom: 24 }}>
        <div style={{ fontWeight: 500, marginBottom: 8 }}>沉浸式亲情画面：</div>
        <div style={{ marginBottom: 8 }}>
          当小猫踮着脚尖蹭向猫妈妈的下巴，当同窝兄弟姐妹挤在软垫上打盹，阳光透过玻璃窗洒在它们同款花纹的毛发上 —— 这不是偶然的邂逅，而是我们为你定制的'亲情见面会'。
        </div>
        <ul style={{ margin: '12px 0 0 0', paddingLeft: 20 }}>
          <li>✅ 猫爸妈互动展示：亲眼见证种猫的温顺性格（看猫妈妈耐心舔舐幼崽，猫爸爸主动蹭手求摸）</li>
          <li>✅ 手足同框时刻：观察小猫与兄弟姐妹的相处模式（活泼的追着尾巴跑，安静的窝在角落踩奶）</li>
          <li>✅ 温情合影服务：专业摄影师记录'家族同框'瞬间，赠送纸质版纪念照（让领养充满仪式感）</li>
        </ul>
        <div style={{ marginTop: 12, color: '#888' }}>
          你会发现：小猫扑蝴蝶的姿势，原来和猫爸爸一模一样；它喜欢蜷缩的睡姿，藏着猫妈妈的影子。这种血脉里的联结，比任何证书都更能证明'它天生亲人'的基因。
        </div>
      </div>
      {/* 视觉化传播表格 */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>温馨场景 · 传递价值 · 消费者感知</div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', minWidth: 320 }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ffe58f', padding: 8, background: '#fffbe6' }}>温馨场景</th>
                <th style={{ border: '1px solid #ffe58f', padding: 8, background: '#fffbe6' }}>传递价值</th>
                <th style={{ border: '1px solid #ffe58f', padding: 8, background: '#fffbe6' }}>消费者感知</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ffe58f', padding: 8 }}>猫妈妈用鼻尖轻碰小猫额头</td>
                <td style={{ border: '1px solid #ffe58f', padding: 8 }}>血缘传承的温柔</td>
                <td style={{ border: '1px solid #ffe58f', padding: 8 }}>&quot;原来它的亲人这么友善，难怪性格这么好&quot;</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ffe58f', padding: 8 }}>小猫与兄弟姐妹互相舔毛</td>
                <td style={{ border: '1px solid #ffe58f', padding: 8 }}>社交能力培养</td>
                <td style={{ border: '1px solid #ffe58f', padding: 8 }}>&quot;在原生家庭长大的猫，更懂得如何与人和动物相处&quot;</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ffe58f', padding: 8 }}>猫爸爸主动趴在访客脚边</td>
                <td style={{ border: '1px solid #ffe58f', padding: 8 }}>基因稳定性</td>
                <td style={{ border: '1px solid #ffe58f', padding: 8 }}>&quot;父母亲人，小猫大概率也会亲人&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 信任强化话术 */}
      <div style={{ background: '#e6fffb', borderRadius: 12, padding: 16, marginBottom: 24 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>信任强化</div>
        <div>
          我们拒绝'笼养繁殖'的冰冷交易，坚持让每只小猫在家庭式环境中长大：<br />
          猫妈妈亲自带大至 8 周龄，学会埋屎、社交等生存技能<br />
          每天 3 次亲子互动时间，确保小猫从小习惯人类接触<br />
          见面时提供'家族成长视频'（从出生到断奶的完整记录）<br />
          当你看到小猫奶声奶气地跟着猫爸爸学抓玩具，看到猫妈妈把最胖的罐头让给孩子 —— 这种在爱里长大的毛孩，天生就带着亲人的本能。
        </div>
      </div>
      {/* 结尾情感升华 */}
      <div style={{ fontSize: 16, color: '#888', textAlign: 'center', marginTop: 32 }}>
        让"全家福"成为领养的起点，让温暖陪伴每一天 —— 在这里，遇见的不只是猫咪，更是它的家族和爱的传承。
      </div>
      {/* 吸底预约按钮 */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: '#fff', padding: 16, boxShadow: '0 -2px 8px rgba(255,179,71,0.08)', zIndex: 10 }}>
        <button
          style={{
            width: '100%',
            background: '#ffb347',
            color: '#fff',
            fontSize: 18,
            fontWeight: 600,
            border: 'none',
            borderRadius: 8,
            padding: '16px 0',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(255,179,71,0.08)'
          }}
          onClick={() => setShowSuccess(true)}
        >
          立即预约亲人见面
        </button>
      </div>
      {/* 预约成功提示 */}
      {showSuccess && (
        <div style={{ position: 'fixed', left: 0, top: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.25)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: 32, textAlign: 'center', minWidth: 240 }}>
            <div style={{ fontSize: 22, color: '#52c41a', marginBottom: 16 }}>预约成功！</div>
            <div style={{ color: '#888', marginBottom: 24 }}>我们会尽快与您联系确认见面安排。</div>
            <button
              style={{ background: '#ffb347', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 32px', fontSize: 16, cursor: 'pointer' }}
              onClick={() => navigate('/home', { replace: true })}
            >
              知道了
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatFamilyIntroPage; 