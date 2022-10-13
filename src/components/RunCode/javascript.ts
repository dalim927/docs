export default async function runJavascript(code: string, setResult: (result: string) => void, async: boolean) {
  let buffer = '';

  const _print = function (...theArgs) {
    let theArgsLength = theArgs.length;

    for (const arg of theArgs) {
      theArgsLength--;

      switch (typeof arg) {
        // case 'null':
        case 'undefined':
        case 'symbol':
        case 'number':
        case 'boolean':
        case 'function':
        case 'string':
          buffer = buffer + String(arg);
          break;
        default:
          buffer = buffer + JSON.stringify(arg, undefined, 2);
      }
      if (0 != theArgsLength) {
        buffer = buffer + ' ';
      }
    }
    buffer = buffer + '\n';
    setResult(buffer);
  };

  const _console = {
    trace: _print,
    debug: _print,
    log: _print,
    info: _print,
    warn: _print,
    error: _print,
  };

  try {
    code = `
      (async function() {
        try {
          let console = _console; ${code}; 
        } catch (e) {
          console.log(e);
        }
      })()
    `

    let runCode;

    if (async === true) {
      const Async = Object.getPrototypeOf(async function () { }).constructor;

      runCode = new Async('_console', `return await ${code}`);
    } else {
      runCode = new Function('_console', code);
    }

    await runCode(_console)

  } catch (e) {
    buffer = buffer + String(e);
    setResult(buffer);
  }
}
