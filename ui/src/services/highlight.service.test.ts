import { describe, expect, test } from 'vitest';
import { useHighlight } from './highlight.service';

const { highlight } = useHighlight();

describe('useHighlight', () => {
  describe('highlight', () => {
    describe('given a known language is passed', () => {
      test('should trim and highlight the code', () => {
        expect(highlight("  const name = 'John Duck'  ", 'javascript')).toEqual(
          '<span class="hljs-keyword">const</span> name = <span class="hljs-string">&#x27;John Duck&#x27;</span>',
        );
      });
    });

    describe('given an unknown language is passed', () => {
      test('should trim and auto highlight the code', () => {
        expect(highlight("  const name = 'John Duck'  ", 'unknown')).toEqual(
          '<span class="hljs-keyword">const</span> <span class="hljs-keyword">name</span> = <span class="hljs-string">&#x27;John Duck&#x27;</span>',
        );
      });
    });
  });
});
