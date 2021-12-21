/**
 * Set to true to hide error messages in the console when unit tests are
 * running.
 *
 * Also return the jest spy for checking if the console.error was called.
 */
export function hideConsoleError(hide: boolean): { spy: jest.SpyInstance } {
    // The following code mocks the console.error so that tests with expected
    // failures that log to the console can be run without making the test logs
    // ugly and messy.
    const ref = { spy: jest.spyOn(console, 'error') };

    beforeEach(() => {
      if (!hide) {
        return;
      }

      ref.spy = jest.spyOn(console, 'error');
      ref.spy.mockImplementation(() => {});
    });

    afterEach(() => {
      ref.spy.mockRestore();
    });

    return ref;
}
