/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* <CodeMirror value={value} height="100px" extensions={[javascript({ jsx: true })]} /> */

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useColorMode } from '@docusaurus/theme-common';

import runJavascript from './javascript';
import styles from './styles.module.css';

interface Props {
  minHeight: number;
  maxHeight: number;
  title: string;
  value: string;
  async: boolean;
}

function Header({ children }) {
  return <div className={clsx(styles.RunCodeHeader)}>{children}</div>;
}

let asyncList: any = [];
let setTimeoutLocal = globalThis.setTimeout;

const setTimeout = (fn: () => any, delay: number | undefined) => {
  asyncList.push(
    new Promise((resolve) => {
      setTimeoutLocal(() => {
        resolve(fn());
      }, delay);
    })
  )
}

export default function RunCode({
  minHeight = 100,
  title = 'Live Editor',
  async = true,
  value = 'console.log("Hello World.", new Date())',
}: Props): JSX.Element {
  const [code, setCode] = useState(value);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [codeResult, setCodeResult] = useState('');
  const { colorMode } = useColorMode();

  const handleClick = useCallback(async () => {
    setCodeResult('Loading...')
    setLoading(true);
    await runJavascript(code, setResult, true);
    await Promise.all(asyncList);
    setLoading(false);
    setCodeResult('')
  }, [code]);

  const onChange = useCallback((value: string) => {
    setCode(value);
  }, []);

  return (
    <div className={styles.RunCode}>
      <Header>
        {title}
      </Header>
      <div className={styles.RunCodeEditor} style={{ minHeight }}>
        <CodeMirror
          value={value}
          height={minHeight.toString() + 'px'}
          theme={colorMode}
          extensions={[javascript({ jsx: true })]}
          onChange={onChange}
        />
      </div>
      <Header>
        <button disabled={loading} className={styles.RunCodeButton} onClick={handleClick}>
          Run Code
        </button>
      </Header>
      {codeResult.length ? <pre className={styles.RunCodePre}>{codeResult}</pre> : null}
      <pre className={styles.RunCodePre}>{result}</pre>
    </div>
  );
}
