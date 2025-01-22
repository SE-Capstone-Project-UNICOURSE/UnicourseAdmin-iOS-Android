# React Native Project Guidelines

## **Clean Code Rules**

### **General Clean Code Rules**

1. **Follow Naming Conventions**:

   - Use descriptive, meaningful names for variables, functions, and components (e.g., `UserProfileScreen` instead of `Screen1`).
   - Use camelCase for variables and functions, PascalCase for components, and UPPER_CASE for constants.

2. **Write Small, Single-Purpose Functions**:

   - Functions should perform one task and be concise. Apply the **Single Responsibility Principle**.

3. **Avoid Magic Numbers and Strings**:

   - Define constants for repeated values (e.g., `const ANIMATION_DURATION = 300;`).

4. **Comment Intentionally**:

   - Write comments only when necessary (e.g., explaining complex algorithms). Let your code be self-explanatory.

5. **Consistent Formatting**:

   - Use a linter and formatter (e.g., ESLint, Prettier) to maintain consistency in indentation, spacing, and code style.

6. **Avoid Code Duplication**:

   - Extract common functionality into reusable components, utilities, or hooks.

7. **Limit Function Parameters**:
   - Use objects to pass multiple parameters when necessary for better readability.

---

### **React Native-Specific Rules**

1. **Separate Logic and UI**:

   - Keep business logic in hooks, Redux, or context and keep UI-related logic in components.

2. **Use Functional Components**:

   - Prefer functional components with hooks over class components.

3. **Style Responsibly**:

   - Use `StyleSheet.create` for consistent and optimized styling.
   - Group shared styles into a separate file.

4. **Avoid Inline Styles**:

   - Define styles externally unless it’s a simple one-liner.

5. **Optimize Re-Renders**:

   - Use `React.memo` for components and `useCallback` or `useMemo` for functions or values passed as props.

6. **Handle State Properly**:

   - For global state, use Context API, Redux Toolkit, or libraries like Recoil.
   - Avoid prop drilling by restructuring state or utilizing context.

7. **Modularize Navigation**:
   - Structure your navigation in separate files (e.g., `MainStack`, `AuthStack`).
   - Use clear names for routes and organize screens logically.

### **Testing Rules**

1. **Write Unit Tests**:

   - Test all critical business logic with **Jest**.

2. **Test UI Components**:

   - Use **React Native Testing Library** to ensure UI components behave correctly.

3. **Mock External Dependencies**:

   - Use mocks for APIs or services to isolate unit tests.

4. **Adopt TDD**:
   - Write tests before implementation to enforce clean, testable code.

---

### **Performance and Optimization Rules**

1. **Lazy Load Components**:

   - Use React’s `React.lazy` and dynamic imports for screens or heavy modules.

2. **Avoid Unnecessary Renders**:

   - Use `keyExtractor` for FlatList to improve performance and avoid unnecessary renders.

3. **Optimize Images**:

   - Use optimized formats and consider lazy loading with libraries like `react-native-fast-image`.

4. **Manage Animations Efficiently**:
   - Use libraries like `react-native-reanimated` for better performance.

---

### **Code Review and Collaboration**

1. **Pull Requests**:

   - Keep pull requests small and focused on a single feature or bug fix.

2. **Document Decisions**:

   - Add comments in the codebase or PR to explain non-obvious decisions.

3. **Peer Review**:
   - Use code reviews to ensure adherence to clean code principles.

---

By following these rules, the project will remain maintainable, scalable, and efficient over time.
