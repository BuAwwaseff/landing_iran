const observerCache = new Map<string, IntersectionObserver>();

export function observeOnce(
  element: Element,
  onEnter: () => void,
  options: IntersectionObserverInit = {
    rootMargin: "0px 0px -10%",
    threshold: 0.2,
  },
) {
  const key = JSON.stringify(options);
  let observer = observerCache.get(key);

  if (!observer) {
    const callbacks = new WeakMap<Element, () => void>();

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const callback = callbacks.get(entry.target);
          if (callback) callback();
          observer?.unobserve(entry.target);
          callbacks.delete(entry.target);
        }
      });
    }, options);

    (observer as IntersectionObserver & {
      __callbacks?: WeakMap<Element, () => void>;
    }).__callbacks = callbacks;

    observerCache.set(key, observer);
  }

  const extendedObserver = observer as IntersectionObserver & {
    __callbacks?: WeakMap<Element, () => void>;
  };

  extendedObserver.__callbacks?.set(element, onEnter);
  observer.observe(element);

  return () => {
    extendedObserver.__callbacks?.delete(element);
    observer?.unobserve(element);
  };
}

