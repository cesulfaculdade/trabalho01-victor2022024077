import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  headerContainer: {
    backgroundColor: "#7A4A9E",
    width: "100%",
    height: 173,
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    position: "relative",
    top: -27,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 24,
  },
  statusContainer: {
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 68,
  },
  emptyListContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  productWrapper: {
    flexDirection: "row",
  },
  finishedWrapper: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F2F2F2",
    borderWidth: 0.5,
    borderColor: "#808080",
    borderRadius: 6,
    maxWidth: 289,
    height: 54,
    marginRight: 4,
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: "#31C667",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#F2F2F2",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 25.2,
  },
  productCounterText: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    color: "#31C667",
    marginRight: 8,
  },
  finishedCounterText: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    color: "#7A4A9E",
    marginRight: 8,
  },
  productCounterNumber: {
    paddingHorizontal: 8,
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 12,
    alignSelf: "center",
  },
  finishedCounterNumber: {
    paddingHorizontal: 8,
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 12,
    alignSelf: "center",
  },
  boldText: {
    color: "#808080",
    fontStyle: "normal",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 16,
  },
  normalText: {
    color: "#808080",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  list: {
    justifyContent: "center",
    borderTopColor: "#D9D9D9",
    borderStyle: "solid",
    borderTopWidth: 1,
  },
});