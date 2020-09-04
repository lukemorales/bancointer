/* eslint consistent-return: 0 */
import { useEffect, useRef } from 'react';

type EventListenerOptions = {
  enabled?: boolean;
  target?: GlobalEventHandlers;
};

interface EventListenerHook {
  (
    eventType: keyof GlobalEventHandlersEventMap,
    handler: (event: Event | MouseEvent) => void,
    option: EventListenerOptions,
  ): void;
}

const useEventListener: EventListenerHook = (eventType, handler, options) => {
  const { enabled = true, target = document } = options || {};
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    if (!enabled) {
      return;
    }

    function internalHandler(e: Event): void {
      return handlerRef.current(e);
    }

    target.addEventListener(eventType, internalHandler);

    return () => {
      target.removeEventListener(eventType, internalHandler);
    };
  }, [eventType, enabled, target]);
};

export default useEventListener;
