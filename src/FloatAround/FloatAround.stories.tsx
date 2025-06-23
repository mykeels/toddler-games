import FloatAround from './index';

export default {
  title: 'components/FloatAround',
  component: FloatAround,
};

export const Default = () => (
  <div>
    <FloatAround>
      <div className="bg-red-500 w-10 h-10">ABC</div>
    </FloatAround>
    <FloatAround>
      <div className="bg-red-500 w-10 h-10">DEF</div>
    </FloatAround>
  </div>
);
