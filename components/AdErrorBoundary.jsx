class AdErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null; // 广告出错时优雅降级
    }
    return this.props.children;
  }
} 