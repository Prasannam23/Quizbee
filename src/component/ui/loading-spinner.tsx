interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export default function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8'
    };

    return (
        <div className={`${sizeClasses[size]} border-2 border-current border-t-transparent rounded-full animate-spin ${className}`}>
        </div>
    );
}
