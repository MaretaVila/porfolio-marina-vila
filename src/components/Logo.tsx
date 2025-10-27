import logoImage from 'figma:asset/e23331092e4a537202b59c1a2e736d785b4dfeee.png';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img 
        src={logoImage} 
        alt="Marina Vila Logo" 
        className="h-12 w-auto"
      />
      <h1 className="text-xl font-medium text-gray-900">Marina Vila</h1>
    </div>
  );
}