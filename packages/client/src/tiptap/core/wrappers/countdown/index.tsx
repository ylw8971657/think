import { Space, Typography } from '@douyinfe/semi-ui';
import cls from 'classnames';
import Countdown from 'react-countdown';
import { DragableWrapper } from 'tiptap/core/wrappers/dragable';

import styles from './index.module.scss';

const { Text, Title } = Typography;

const renderer = (props) => {
  const { completed, formatted } = props;
  const { days, hours, minutes, seconds } = formatted;

  if (completed) {
    return <Title heading={4}>已结束</Title>;
  } else {
    return (
      <Space align="baseline">
        <Title heading={2}>{days}</Title>
        <Text size="small" style={{ transform: `translateY(-2px)` }}>
          / 天
        </Text>
        <Title heading={3}>
          {hours}:{minutes}:{seconds}
        </Title>
      </Space>
    );
  }
};

export const CountdownWrapper = ({ editor, node }) => {
  const { title, date } = node.attrs;

  return (
    <DragableWrapper editor={editor}>
      <div className={cls(styles.wrap, 'render-wrapper')}>
        <Text>{title}</Text>
        <Countdown date={date} renderer={renderer}></Countdown>
      </div>
    </DragableWrapper>
  );
};
